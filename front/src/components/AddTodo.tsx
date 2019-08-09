import * as React from "react";

interface Props {
  onSubmit: (text: string) => void;
}

interface State {
  value: string;
}

class Component extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      value: '',
    }
  }

  handleChange (event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    this.setState({
      value: event.target.value,
    })
  }

  render() {
    const {onSubmit} = this.props;
    const {value} = this.state;
    return (
      <div>
        <input type="text" onChange={e => this.handleChange(e)} value={value}/>
        <input type="button" value="追加" onClick={() => onSubmit(value)} />
      </div>
    )
  }
}

export default Component;