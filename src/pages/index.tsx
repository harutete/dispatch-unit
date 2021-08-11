import { Heading01 } from '../components/atoms/Heading01';
import { Heading02 } from '../components/atoms/Heading02';

const Home = () => (
  <div>
    <Heading01 text="Dispatch unit" />
    <Heading02 text="Choose member!" />
    <select>
      <option value="">メンバーを選択</option>
    </select>
    <Heading02 text="Choose skill!" />
    <select>
      <option value="">スキルを選択</option>
    </select>
    <button type="button">Dispatch!</button>
  </div>
);

export default Home;
