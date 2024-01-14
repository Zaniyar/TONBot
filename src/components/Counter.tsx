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
import { useState } from "react";

export function Counter() {
  const { connected } = useTonConnect();
  const { value, address, sendIncrement } = useCounterContract();
  const [counter, setCounter] = useState(0)
  return (
    <div className="Container">
      <TonConnectButton />

      <Card>
        <FlexBoxCol>
          <h3>🍈ARBUZ🍉</h3>
          <h6>click on the Arbuz</h6>
          <FlexBoxRow>
            <Canvas style={{height:"300px"}}>
              <OrbitControls enableZoom={false} />
              <Environment preset={"city"} />
              <spotLight intensity={2} position={[-6,0,2]}/>
              <Html position={[0,4,0]} ><h3 style={{color:"white", userSelect: "none", textShadow: "0 0 10px #fff, 0 0 10px #fff, 0 0 10px #e60073, 0 0 10px #e60073, 0 0 10px #e60073, 0 0 10px #e60073, 0 0 10px #e60073"}}>{counter}</h3></Html>
              <Gltf onClick={()=>{setCounter(counter+1)}} rotation={[.7,2,0]} scale={6} src="melon.glb" />
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
