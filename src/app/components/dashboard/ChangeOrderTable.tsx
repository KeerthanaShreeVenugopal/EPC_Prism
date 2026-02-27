export default function ChangeOrderTable({ orders }: any) {
  return (
    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
      <h3 className="text-white mb-4 text-lg font-semibold">
        Change Orders
      </h3>

      <div className="space-y-3">
        {orders.map((order: any) => (
          <div
            key={order.id}
            className="flex justify-between items-center bg-white/5 p-3 rounded-lg"
          >
            <span className="text-gray-300">{order.id}</span>

            <span className="text-purple-400 font-semibold">
              ₹{order.value.toLocaleString()}
            </span>

            <span
              className={
                order.status === "Approved"
                  ? "text-green-400"
                  : order.status === "Pending"
                  ? "text-yellow-400"
                  : "text-red-400"
              }
            >
              {order.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}