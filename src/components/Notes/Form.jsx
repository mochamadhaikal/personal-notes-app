import React from 'react';
 
export default class Form extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            filled: true,
            lengthTitle: 50,
            title: '',
            body: '',
            createdAt: +new Date(),
            archived: false,
        }
        
        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleChangeEventHandler(e) {
        const title = e.target.value;
        const lengthTitle = 50 - title.length;
        this.setState({ lengthTitle });
        if (lengthTitle > 0) {
            this.setState((prevState) => {
                return {
                    ...prevState,
                    title: title,
                }
            });
        }
    }

    onBodyChangeEventHandler(e) {
        this.setState((prevState) => {
            return {
                ...prevState,
                body: e.target.value,
            }
        });
    }

    onSubmitEventHandler(e) {
        e.preventDefault();
        if (this.state.body === '' || this.state.title === '') {
            const filled = false;
            this.setState({ filled });
        } else {
            const filled = true;
            this.setState({ filled });
            const data = {
                title: this.state.title,
                body: this.state.body,
                createdAt: this.state.createdAt,
                archived: this.state.archived,
            }
            this.props.addNote(data);
        }
        setTimeout(() => {
            this.setState({title: '', body: ''});
        }, 1000)
    }

    render() {
        return (
            <div>
                <form className='form' onSubmit={this.onSubmitEventHandler}>
                        <h2>Buat Catatan</h2>
                    <div className="form-input">
                        { 
                            (this.state.lengthTitle <= 0) ? alert('karakter sudah maksimal') : ''
                        }
                        {
                            (this.state.lengthTitle <= 50 && this.state.lengthTitle !== 0) ? <p className='title-length'>Sisa Karakter: {this.state.lengthTitle}</p> : ''
                        }
                        <input type="text" value={this.state.title} placeholder='Ini adalah Judul ...' onChange={this.onTitleChangeEventHandler} required/>
                    </div>
                    <div className="form-input">
                        <textarea cols="5" rows="5" value={this.state.body} onChange={this.onBodyChangeEventHandler} placeholder='Tuliskan catatanmu di sini ...' required></textarea>
                    </div>
                    <button type='submit' className="add-button">Buat</button>
                </form>
            </div>
        );
    }
}