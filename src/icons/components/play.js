import React from 'react'
import Icon from './icon'

// --- componente presentacional o tonto o funcional
function PlayIcon(props){
	return (
		<Icon {...props}>
		<path d="M43.331,21.237L7.233,0.397c-0.917-0.529-2.044-0.529-2.96,0c-0.916,0.528-1.48,1.505-1.48,2.563v41.684
		c0,1.058,0.564,2.035,1.48,2.563c0.458,0.268,0.969,0.397,1.48,0.397c0.511,0,1.022-0.133,1.48-0.397l36.098-20.84
		c0.918-0.529,1.479-1.506,1.479-2.564S44.247,21.767,43.331,21.237z"/>
		</Icon>
	)
}

export default PlayIcon;