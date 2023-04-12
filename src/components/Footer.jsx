import github from '../assets/github.svg';

function Footer() {
  return (
    <footer className='bg-violet-400/25 text-white'>
      <div className='mx-auto max-w-screen-xl p-5 flex items-center justify-between'>
        <span className='text-sm'>© 2023 All Rights Reserved.</span>
        <a href='https://github.com/SmokeGuap'>
          <img src={github} className='h-12' alt='Movies Search' />
        </a>
      </div>
    </footer>
  );
}
export default Footer;
