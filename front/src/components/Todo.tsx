import * as React from 'react'

type Props = {
  text: string;
  completed: boolean;
  onClick: () => void;
}

const component: React.SFC<Props> = (props: Props) => {
  return (
    <li
      onClick={props.onClick}
      style={{
        textDecoration: props.completed ? 'line-through' : 'none',
      }}
    >
      {props.text}
    </li>
  )
}

export default component;
