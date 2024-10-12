import {forwardRef, useImperativeHandle, useRef} from "react";

function TestUseRef() {
	const ref = useRef(null);

	function handelClcik() {
		console.log(ref.current);
	}

	return (
		<>
			<h1
				ref={ref}
				onClick={handelClcik}>
				UseRef

			</h1>
			<h1
				ref={(thisDome) => (thisDome.style.background = "#1e34ff")}
				onClick={handelClcik}>
				UseRef23
			</h1>
			<Child
				ref={ref}
			/>
		</>
	);
}

// eslint-disable-next-line react/display-name
const Child = forwardRef((props, ref) => {
	useImperativeHandle(ref, () => {
		return {
			name: "天河送",
			age:  10000
		};
	});

	return <h1>子组件111</h1>;
});

export default TestUseRef;