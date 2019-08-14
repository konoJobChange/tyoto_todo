import * as React from 'react';

interface Props {
  active: boolean;
  children: React.ReactNode;
  onClick: () => void;
}

const component: React.SFC<Props> = (props: Props) => {
  return (
    <button
      onClick = { props.onClick }
      disabled = { props.active }
      style = {{
        marginLeft: '4px',
      }}
    >
      { props.children }
    </button>
  )
}

export default component
