import Card from "./(components)/Card";

const getTickets = async () => {
  const res = await fetch("/api/Tickets", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch booked tickets");
  }
  return res.json();
};

export default async function Home() {
  const { tickets } = await getTickets();
  const uniqueCategory = [...new Set(tickets?.map(({ category }) => category))];
  //console.log(tickets, uniqueCategory);
  return (
    <div className="p-5">
      <div>
        {tickets &&
          uniqueCategory?.map((ele, idx) => (
            <div className="mb-4" key={idx}>
              <h2>{ele}</h2>
              <div className="grid grid-cols-3">
                {tickets
                  .filter(ticket => ele === ticket.category)
                  .map((filteredTicket, index) => (
                    <Card ticket={filteredTicket} id={index} key={index} />
                  ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
