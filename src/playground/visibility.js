class Visibility extends React.Component {
    constructor(props) {
        super(props)
        this.handleVisibilityToogle = this.handleVisibilityToogle.bind(this)
        this.state = {
            visibility: false,
            text: 'Show Details',
            para: ''
        }
    }
    handleVisibilityToogle() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility,
                text: !prevState.visibility ? 'Hide Details' : 'Show Details'
            }
        })
        if (this.state.text === 'Hide Details') {
            console.log('Nothing')
            this.setState(() => {
                return {
                    para: ''
                }
            })
        } else {
            console.log('Show text')
            this.setState(() => {
                return {
                    para: 'Some text'                    
                }
            })
        }
        console.log(this.state)
        // console.log(!this.state.visiblity ? 'This is some text update' : 'Nothing')
    }
    render() {
        return (
            <div>
                <h1>Visibility Toogle</h1>
                <button onClick={this.handleVisibilityToogle}>{this.state.text}</button>
                <p>{this.state.para}</p>
            </div>
        )
    }
}

ReactDOM.render(<Visibility />, document.getElementById('app'))
// // let buttonText = 'Show Details';
// // let text;
// // const show = () => {
// //     if (buttonText === 'Hide Details') {
// //         buttonText = 'Show Details'
// //         text = ''
// //         render()
// //     } else {
// //         buttonText = 'Hide Details';
// //         text = 'This is some text.'
// //         render()   
// //     }
// // }

// let visibility = false;

// const visible = () => {
//     // if (visibility) {
//     //     visibility = false;
//     //     render()
//     // }
//     // else {
//     //     visibility = true;
//     //     render()
//     // }

//     visibility = !visibility
//     render()
// }

// const appRoot = document.getElementById('app')

// const render = () => {
//     const template = (
//         <div>
//             <h1>Visibility Toogle</h1>
//             {/* <button onClick={show}>{buttonText}</button> */}
//             <button onClick={visible}>
//                 {visibility ? 'Hide Details' : 'Show Details'}
//             </button>
//             <p>{visibility ? 'This is some other text' : ''}</p>
//         </div>
//     );
//     ReactDOM.render(template, appRoot)
// }

// render();