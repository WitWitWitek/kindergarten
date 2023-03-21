import Image from 'next/image';

export default function Offer() {
  return (
    <>
      <h3 className="home-page__section-subtitle">Oto poszczególne z nich:</h3>
      <ul className='home-page__offer'>
        <li className='home-page__offer-item'>
            <div className='home-page__offer-image'>
              <Image src='/icons/party.png' alt='Ikona zajęć muzycznych' fill />
            </div>
            <p>Muzyka</p>
        </li>
        <li className='home-page__offer-item'>
            <div className='home-page__offer-image'>
              <Image src='/icons/gymnastics.png' alt='Ikona zajęć gimnastycznych' fill />
            </div>
            <p>Gimnastyka</p>
        </li>
        <li className='home-page__offer-item'>
            <div className='home-page__offer-image'>
              <Image src='/icons/playground.png' alt='Ikona zajęć na dworze' fill />
            </div>
            <p>Ogród</p>
        </li>
        <li className='home-page__offer-item'>
            <div className='home-page__offer-image'>
              <Image src='/icons/united-kingdom.png' alt='Ikona zajęć języka angielskiego' fill />
            </div>
            <p>Angielski</p>
        </li>
        <li className='home-page__offer-item'>
            <div className='home-page__offer-image'>
              <Image src='/icons/palette.png' alt='Ikona zajęć plastycznych' fill />
            </div>
            <p>Zajęcia plastyczne</p>
        </li>
        <li className='home-page__offer-item'>
            <div className='home-page__offer-image'>
              <Image src='/icons/cooking.png' alt='Ikona zajęć kulinarnych' fill />
            </div>
            <p>Zajęcia kulinarne</p>
        </li>
      </ul>
    </>
  )
}
