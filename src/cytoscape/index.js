import cytoscape from "cytoscape";
import { useEffect, useRef } from "react";

function CytoscapeContainer() {
  const cytoRef = useRef();

  useEffect(() => {
    const config = {
      container: cytoRef.current,
      elements: [
        {
          data: {
            id: "node1",
            url: "https://github.com/nomelancholy/js-project-driven-study-mind-map/projects/1?add_cards_query=is%3Aopen",
            label: "Project Driven Study Map",
          },
        },
        {
          data: {
            id: "node2",
            url: "https://www.google.co.kr/search?newwindow=1&safe=off&sxsrf=ACYBGNQPahfceN-IrrIMqFcBxt0bBJxcog%3A1577373548670&source=hp&ei=bM8EXp3aJoKpoASW2InwAg&q=no+such+file+or+directory%2C+open+%27C%3A%5Cdev%5Cworkspace%5Cjs-seomal-clone%5Cpackage.json%27&oq=no+such+file+or+directory%2C+open+%27C%3A%5Cdev%5Cworkspace%5Cjs-seomal-clone%5Cpackage.json%27&gs_l=psy-ab.3...7437.7437..8911...1.0..0.95.95.1......0....2j1..gws-wiz.pzIrSS2UT84&ved=0ahUKEwidwK2wztPmAhWCFIgKHRZsAi4Q4dUDCAY&uact=5",
            label: "package.json 에러",
          },
        },
        {
          data: {
            id: "node3",
            url: "https://www.google.co.kr/search?newwindow=1&safe=off&sxsrf=ACYBGNQPahfceN-IrrIMqFcBxt0bBJxcog%3A1577373548670&source=hp&ei=bM8EXp3aJoKpoASW2InwAg&q=no+such+file+or+directory%2C+open+%27C%3A%5Cdev%5Cworkspace%5Cjs-seomal-clone%5Cpackage.json%27&oq=no+such+file+or+directory%2C+open+%27C%3A%5Cdev%5Cworkspace%5Cjs-seomal-clone%5Cpackage.json%27&gs_l=psy-ab.3...7437.7437..8911...1.0..0.95.95.1......0....2j1..gws-wiz.pzIrSS2UT84&ved=0ahUKEwidwK2wztPmAhWCFIgKHRZsAi4Q4dUDCAY&uact=5",
            label: "package.json 에러",
          },
        },
        {
          data: {
            id: "node1->node2",
            source: "node2",
            target: "node1",
          },
        },
        {
          data: {
            id: "node1->node3",
            source: "node3",
            target: "node1",
          },
        },
      ],
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
        name: "grid",
        rows: 5,
      },
    };

    cytoscape(config);
  }, []);
  return <div id="cy" ref={cytoRef} style={{ height: "100vh" }}></div>;
}

export default CytoscapeContainer;
