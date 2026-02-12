export default function Input({
  type,
  placeHolder,
  value,
  onChangeHandler,
  autoComplete,
}) {
  return (
    <>
      <div>
        <input
          type={type}
          placeholder={placeHolder}
          value={value}
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={onChangeHandler}
          autoComplete={autoComplete}
          required
        />
      </div>
    </>
  );
}
