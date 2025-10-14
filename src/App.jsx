import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Tools from "./components/Tools";
import PdfMerge from "./components/PdfMerge";
import FileMergeToPdf from "./components/FileMergeToPdf";
import ReduceFileSize from "./components/ReduceFileSize";
import ImageToText from "./components/ImageToText";
import PdfEdit from "./components/PdfEdit";

function App() {
  const [activeTool, setActiveTool] = useState(null);

  const toolComponents = {
    pdfmerge: <PdfMerge onBack={() => setActiveTool(null)} />,
    filemergetopdf: <FileMergeToPdf onBack={() => setActiveTool(null)} />,
    reducefilesize: <ReduceFileSize onBack={() => setActiveTool(null)} />,
    imagetotext: <ImageToText onBack={() => setActiveTool(null)} />,
    pdfedit: <PdfEdit onBack={() => setActiveTool(null)} />
  };

  return (
    <div>
      <Header />
      {!activeTool ? (
        <>
          <Home />
          <Tools setActiveTool={setActiveTool} />
        </>
      ) : (
        toolComponents[activeTool]
      )}
      <Footer />
    </div>
  );
}

export default App;