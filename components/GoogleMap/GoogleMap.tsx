
export default function GoogleMap() {
  return (
      <iframe 
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10115.093337153987!2d17.9224822!3d50.6684689!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47105301597fb1ff%3A0x449df01c90e00530!2sUrz%C4%85d%20Miasta%20Opola!5e0!3m2!1spl!2spl!4v1679223489521!5m2!1spl!2spl" 
          allowFullScreen={false} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          className="google-map"
      ></iframe>
  )
}