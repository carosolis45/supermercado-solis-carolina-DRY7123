export default function StatCard({ title, value }) {
  return (
    <div className="bg-[#1e1e1e] p-4 rounded-xl text-center border border-[#333] shadow-md">
      <h3 className="text-3xl font-bold text-[#4caf50]">{value}</h3>
      <p className="text-gray-400 text-sm">{title}</p>
    </div>
  );
}