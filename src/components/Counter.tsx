import { TonConnectButton } from "@tonconnect/ui-react";
import { useCounterContract } from "../hooks/useCounterContract";
import { useTonConnect } from "../hooks/useTonConnect";
import { Environment, Gltf, Html, OrbitControls } from "@react-three/drei";
import {
  Card,
  FlexBoxCol,
  FlexBoxRow,
  Ellipsis,
  Button,
} from "./styled/styled";
import { Canvas } from "@react-three/fiber";
import { useEffect, useState } from "react";
import Webcam from "react-webcam";
import { XRButton, XR, Controllers } from "@react-three/xr";


async function checkXRSupport() {
  if ('xr' in navigator && navigator.xr != null) {
    try {
      const vrSupported = await navigator.xr.isSessionSupported('immersive-vr');
      alert('Immersive VR supported: ' + vrSupported);
    } catch (error) {
      alert('Error checking VR support: ' + error);
    }

    try {
      const arSupported = await navigator.xr.isSessionSupported('immersive-ar');
      alert('Immersive AR supported: ' + arSupported);
    } catch (error) {
      alert('Error checking AR support: ' + error);
    }

    try {
      const inlineSupported = await navigator.xr.isSessionSupported('inline');
      alert('Inline sessions supported: ' + inlineSupported);
    } catch (error) {
      alert('Error checking inline session support: ' + error);
    }
  } else {
    alert('WebXR API is not available.');
  }
}

const NavigatorProperties: React.FC = () => {
  const [properties, setProperties] = useState<string[]>([]);

  useEffect(() => {
    checkXRSupport();
    const getAllProperties = (obj: Object) => {
      let properties = new Set<string>();
      let currentObj: Object | null = obj;

      do {
        Object.getOwnPropertyNames(currentObj).forEach(item => properties.add(item));
      } while ((currentObj = Object.getPrototypeOf(currentObj)));

      return [...properties];
    };

    setProperties(getAllProperties(window.navigator));
  }, []);

  return (
    <div>
      <h2>Navigator Properties</h2>
      <ul>
        {properties.map((prop, index) => (
          <li key={index}>{prop}</li>
        ))}
      </ul>
    </div>
  );
};


export function Counter() {
  const { connected } = useTonConnect();
  const { value, address, sendIncrement } = useCounterContract();
  const [counter, setCounter] = useState(0);
  const [tg, setTg] = useState({first_name:"",last_name:"",username:"",photo_url:""});

  useEffect(() => {
    const telegram = (window as any).Telegram;
    if (telegram) {
      // const { first_name, last_name, username } = telegram.WebApp.initDataUnsafe.user;
      setTg(telegram.WebApp.initDataUnsafe.user);
    }

    const localCount = window.localStorage.getItem('counter');
    if (localCount) {
      let savedNumber = JSON.parse(localCount);
      setCounter(savedNumber);
    }
  }, [])
  
  useEffect(() => {
    window.localStorage.setItem('counter',JSON.stringify(counter));
  }, [counter])
  
  return (
    <div className="Container">
      <TonConnectButton />

      <Card>
        <FlexBoxCol>
          <h3><a href="https://t.me/QRyptoCity">Contact me direclty if you want to work on a project: https://t.me/QRyptoCity</a></h3>
          <h6>click on the Arbuz</h6>
          <Webcam />
          <FlexBoxRow>
            <FlexBoxCol>
            {tg && `Hi ${tg.first_name} ${tg.last_name} - @${tg.username}`}
            </FlexBoxCol>
            <FlexBoxCol>
              <img src={tg ? tg.photo_url : "https://placekitten.com/200/139"} style={{width:"100px", height: "100px", borderRadius:"50%"}} />
              {JSON.stringify(tg)}
            </FlexBoxCol>
          </FlexBoxRow>
          <FlexBoxRow>
            <NavigatorProperties/>
          </FlexBoxRow>
          <FlexBoxRow>
            <XRButton
              mode={'AR'}
              sessionInit={{ optionalFeatures: ['local-floor'] }}
              /** Whether this button should only enter an `XRSession`. Default is `false` */
              enterOnly={false}
              /** Whether this button should only exit an `XRSession`. Default is `false` */
              exitOnly={false}
              /** This callback gets fired if XR initialization fails. */
              onError={(error) => alert(JSON.stringify(error))}
            >
              {/* Can accept regular DOM children and has an optional callback with the XR button status (unsupported, exited, entered) */}
              {(status) => `WebXR ${status}`}
            </XRButton>
            <Canvas style={{height:"300px"}}>
              <XR>
              <Controllers />
              <OrbitControls enableZoom={false} />
              <Environment preset={"city"} />
              <spotLight intensity={2} position={[-6,0,2]}/>
              <Html position={[0,4,0]} ><h3 style={{color:"white", userSelect: "none", textShadow: "0 0 10px #fff, 0 0 10px #fff, 0 0 10px #e60073, 0 0 10px #e60073, 0 0 10px #e60073, 0 0 10px #e60073, 0 0 10px #e60073"}}>Contact: @QRyptoCity</h3></Html>
              <Gltf onClick={()=>{setCounter(counter+1)}} rotation={[.7,2,0]} scale={12} src="watermelon_fruit.glb" />
              </XR>
            </Canvas>
          </FlexBoxRow>
          <FlexBoxRow>
            <b>Address</b>
            <Ellipsis>{address}</Ellipsis>
          </FlexBoxRow>
          <FlexBoxRow>
            <b>Value</b>
            <div>{value ?? "Loading..."}</div>
          </FlexBoxRow>
          <Button
            disabled={!connected}
            className={`Button ${connected ? "Active" : "Disabled"}`}
            onClick={() => {
              sendIncrement();
            }}
          >
            Increment
          </Button>
        </FlexBoxCol>
      </Card>
    </div>
  );
}
