import { Card, CardBody } from "@nextui-org/react";
import { FaCircleInfo } from "react-icons/fa6";
import Icon from "src/app/components/ui/Icon";

export default function PageHeader({ message }) {
  return (
    <Card
      classNames={{
        base: ["bg-primary-100"],
      }}
    >
      <CardBody>
        <div className="flex gap-4">
          <Icon icon={FaCircleInfo} size={28} />
          <p>{message}</p>
        </div>
      </CardBody>
    </Card>
  );
}
