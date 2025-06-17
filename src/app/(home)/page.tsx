import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";

export default function Home() {
  return (
    <div>
      <p className="text-rose-500">Hello World</p>
      <Button className="" variant={"elevated"}>
        Button
      </Button>
      <Input></Input>
      <Progress value={50}></Progress>
      <Textarea></Textarea>
    </div>
  );
}
