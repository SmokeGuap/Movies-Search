import github from '../assets/github.svg';

function Footer() {
  return (
    <footer className='bg-blue-500 text-white'>
      <div className='mx-auto max-w-screen-xl py-5 flex items-center justify-between'>
        <span className='text-sm'>© 2023 All Rights Reserved.</span>
        <a href='https://github.com/SmokeGuap'>
          <img src={github} className='h-12' alt='Movies Search' />
        </a>
      </div>
    </footer>
  );
}
export default Footer;
