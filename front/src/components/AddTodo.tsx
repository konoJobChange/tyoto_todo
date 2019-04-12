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

  handleSubmit () {
    
  }
}
