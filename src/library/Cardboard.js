import React, { Component } from "react";

class Cardboard extends Component {
    state = {
        style: {
            position: this.props.fluid ? "fixed" : null,
            height: this.props.fluid ? "100%" : null,
            width: this.props.fluid ? "100%" : null,
            overflowY: this.props.fluid ? "auto" : null,

            zIndex: 10 * this.props.layer,

            visibility: this.props.disabled ? "hidden" : "visible",
        },
    };

    render() {
        let style = { ...this.state.style, ...this.props.style };

        if (this.props.debug) {
            style = {
                ...style,
                outline: "1px solid black",
                outlineOffset: "-1px",
            };

            switch (this.props.debug) {
                case 1:
                    style = { ...style, backgroundColor: "#ffb5b5" };
                    break;
                case 2:
                    style = { ...style, backgroundColor: "#ffe1b5" };
                    break;
                case 3:
                    style = { ...style, backgroundColor: "#ceffb5" };
                    break;
                case 4:
                    style = { ...style, backgroundColor: "#b5fff9" };
                    break;
                case 5:
                    style = { ...style, backgroundColor: "#d4b5ff" };
                    break;

                default:
                    break;
            }
        }

        return <div style={style}>{this.props.children}</div>;
    }
}

export default Cardboard;
