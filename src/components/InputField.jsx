export default function InputField({ label, type, name, value, onChange, required = true, min }) {
  return (
    <div>
      <label className="block mb-1 text-sm font-semibold">{label}</label>
      <input 
        required={required} 
        type={type} 
        name={name}
        min={min}
        value={value}
        className="w-full p-2 rounded bg-[#121212] border border-[#444] focus:outline-none focus:border-[#4caf50] text-white" 
        onChange={onChange} 
      />
    </div>
  );
}