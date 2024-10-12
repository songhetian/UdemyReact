import {useState,useEffect,useRef} from "react";

function ColorPicker () {
    const [color, setColor] = useState("#fff000");

    const changeColor = useRef(false);
    useEffect(() => {
        if (!changeColor.current) {
            return ;
        }
        console.log("颜色改变了");
    }, [color]);

    useEffect(() => {
        console.log("加载了");
    }, []);

    const style= {
        color : color
    }

    function OnChangeColor(event) {
        setColor(() => event.target.value );
        changeColor.current = true;
    }
    return (
        <>
            <h1 style={style}>Hello World</h1>
            <form>
                <input type="color" name="favcolor"  onChange={OnChangeColor}/>
            </form>
        </>
    );
}

export default ColorPicker;