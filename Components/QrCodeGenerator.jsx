import { useState } from "react";
import QRCode from "react-qr-code";

export default function QrCodeGenerator() {

      const [Qrcode, SetQrcode] = useState("");
      const [inputText, setInputText] = useState("");

    function handleClick(){
        SetQrcode(inputText)
        setInputText("")
    }

    return (
        <div className="h-[50vh] w-[60vw] m-auto mt-[3rem] flex flex-col justify-center items-center ">

        <div >
            <input className="outline-none border-s-zinc-200 p-2 text-lg border-2 rounded-lg" type="text" name="Qr-code" onChange={(e) => setInputText(e.target.value)} value={inputText} placeholder="Enter Any Data Here"/>
            <button className="border-2 rounded-lg text-lg p-2 bg-green-500 outline-none" disabled={inputText &&  inputText.trim() === "" ? true : false} onClick={handleClick} >Generate</button>
        </div>
        <div className="mt-[1rem]">
        <QRCode value={Qrcode} size={300}/>
        </div>

        </div>
    )

}
