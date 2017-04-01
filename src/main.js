import hello from 'Components/Hello/helloWorld';
import '../static/styles/main.scss';

if (module.hot) {
  module.hot.accept();
}

hello();
