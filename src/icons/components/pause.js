import React from 'react'
import Icon from './icon'

// --- componente presentacional o tonto o funcional
function PauseIcon(props){
	return (
		<Icon {...props}>
		<path d="M17.991,40.976c0,3.662-2.969,6.631-6.631,6.631l0,0c-3.662,0-6.631-2.969-6.631-6.631V6.631C4.729,2.969,7.698,0,11.36,0
		l0,0c3.662,0,6.631,2.969,6.631,6.631V40.976z"/>
		<path d="M42.877,40.976c0,3.662-2.969,6.631-6.631,6.631l0,0c-3.662,0-6.631-2.969-6.631-6.631V6.631
		C29.616,2.969,32.585,0,36.246,0l0,0c3.662,0,6.631,2.969,6.631,6.631V40.976z"/>
		</Icon>
	)
}

export default PauseIcon;