import React from 'react';

const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
    return (
        <div>
            <p className='f3'>
                {'For detecting faces, please paste image link (URL) to input field and press the button.'}
            </p>
            <div className='center'>
                <div className='center pa4 br3 shadow-5'>
                    <input className='f4 pa2 w-70 center' type='tex' onChange={onInputChange}/>
                    <button
                        className='w-30 f4 link ph3 pv2 white hover-bg-hot-pink bg-blue b--transparent'
                        // className='w-30 grow f4 link ph3 pv2 dib white bg-blue'
                        onClick={onButtonSubmit}
                    >Detect
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ImageLinkForm;