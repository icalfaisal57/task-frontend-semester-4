import { useEffect, useState } from "react";

function Counter(){
    //variabel angka

    const [angka,setAngka]=useState(0)


    function AddAngka(){
        setAngka(angka+1)
    }
    // console.log(angka)
    //useeffect
    // useEffect(function(){
    //     console.log("Lifecycle dimount")
    //     document.title = `Hasil : ${angka}`;
    // },[])//seconde param [] untuk membatasi useeffect tidak di jalankan pada lifecycle update

    useEffect(function () {
			console.log("Lifecycle dimount");
			document.title = `Hasil : ${angka}`;
		}, [angka]);// ketika state dalam [] berubah makan use effect akan dijalankan namun ketika bukan state angka yang di ganti tidak akan jalan use effectnya

    console.log("lifecycle di render")
    return(
        <div>
        <p>hasil: {angka}</p>
        <button onClick={AddAngka}>add</button>
        </div>
    )
}

export default Counter;