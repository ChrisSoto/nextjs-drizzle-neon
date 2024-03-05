import {getData} from "@/actions/actions";
import Todos from "@/components/Todos";

export default async function Home() {
  const data = await getData();
  return <Todos todos={data} />;
}
