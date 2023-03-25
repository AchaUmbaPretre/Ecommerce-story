import './newLetter.scss'

const NewLetter = () => {
  return (
    <>
        <div className="newLetter">
            <div className="newLetterCont">
                <h3>BE IN TOUCH WITH US:</h3>
                <div className="newLetterSearch">
                    <input type="search" placeholder='entrer votre email..' />
                    <button>JOIN US</button>
                </div>
                <div className="newLetterIcons">
                    <i className="fab fa-facebook"></i>
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-youtube"></i>
                </div>

            </div>
        </div>
    </>
  )
}

export default NewLetter