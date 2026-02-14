//in next js every page file is a server component by default
// but server components can be asyncronous
//

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const Page = () => {
  return (
    <div className="min-h-screen min-w-screen flex items-center justify-center">

      <Button >
        click me
      </Button>
    </div>
  )
}

export default Page;