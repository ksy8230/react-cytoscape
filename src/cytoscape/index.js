import { useEffect, useRef, useState } from "react";
import cytoscape from "cytoscape";
import coseBilkent from "cytoscape-cose-bilkent";
import ModalInfo from "./components/modal";
import { mapLists } from "./nodes";
cytoscape.use(coseBilkent);

function CytoscapeContainer() {
  const container = useRef();
  const cyto = useRef();
  const [toggle, setToggle] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [data, setData] = useState({});

  useEffect(() => {
    const config = {
      container: container.current,
      elements: mapLists,
      style: [
        // 노드 스타일링
        {
          selector: "node",
          style: {
            "background-color": "#666",
            label: "data(label)",
          },
        },
        // 화살표 스타일링
        {
          selector: "edge",
          style: {
            width: 3,
            "curve-style": "bezier",
            "line-color": "#ccc",
            "source-arrow-color": "#ccc",
            "source-arrow-shape": "vee",
          },
        },
      ],
      layout: {
        name: "cose-bilkent",
        animate: false,
        gravityRangeCompound: 1.5,
        fit: true,
        tile: true,
      },
    };
    const cy = cytoscape(config);

    if (container.current === null) return;
    cyto.current = cy;
    cyto.current.on("tap", (e) => {
      let thisNode = e.target;
      if (thisNode.length > 0) {
        const { x, y } = thisNode?.renderedPosition();
        setToggle(true);
        setData(thisNode?._private.data);
        setPosition({
          x,
          y,
        });
      }
    });
  }, []);

  const handleClose = () => {
    setToggle(false);
  };
  return (
    <>
      <div id="cy" ref={container} style={{ height: "100vh" }}></div>
      {toggle && (
        <ModalInfo position={position} data={data} onClose={handleClose} />
      )}
    </>
  );
}

export default CytoscapeContainer;
