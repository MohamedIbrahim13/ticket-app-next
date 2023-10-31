import Form from "@/app/(components)/Form";

const getTicketDetails = async id => {
  try {
    const res = await fetch(`http://localhost:3000/api/Tickets/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch the ticket details");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export default async function Tickets({ params }) {
  // const ticket = await getTicketDetails(params.id);
  let updatedTicket = {};
  const EditMode = params.id === "new" ? false : true;
  if (EditMode) {
    updatedTicket = await getTicketDetails(params.id);
    updatedTicket = updatedTicket.ticket;
  } else {
    updatedTicket = { _id: "new" };
  }
  
  return <Form ticket={updatedTicket} />;
}
