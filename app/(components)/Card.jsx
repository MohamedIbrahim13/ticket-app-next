import Link from "next/link";
import DeleteBlocks from "./DeleteBlocks";
import Piority from "./Piority";
import Progress from "./Progress";
import Status from "./Status";

export default function Card({ ticket }) {
  const formatTime =(timestamp)=>{
    const date = new Date(timestamp);
    return date.toLocaleString("en-US");
    
  }
  return (
    <div className="flex flex-col hover:bg-card-hover bg-card rounded-md shadow-lg p-3 m-2">
      <div className="flex mb-3">
        <Piority priority={ticket.priority} />
        <div className="ml-auto">
          <DeleteBlocks id={ticket._id} />
        </div>
      </div>
      <Link href={`/tickets/${ticket._id}`} style={{ display: "contents" }}>
        <h4 className="mb-1">{ticket.title}</h4>
        <hr className="h-px  border-0 bg-page mb-2 "></hr>
        <p className="whitespace-pre-wrap">{ticket.description}</p>

        <div className="flex-grow"></div>
        <div className="flex mt-2">
          <div className="flex flex-col">
            <p className="text-xs  my-1">{formatTime(ticket.createdAt)}</p>
            <Progress progress={ticket.progress} />
          </div>
          <div className="ml-auto  flex items-end">
            <Status status={ticket.status} />
          </div>
        </div>
      </Link>
    </div>
  );
}
