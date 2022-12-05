export default function Field(props) {
  return (
    <div className="mb-4">
      <label htmlFor={ props.name } className="sr-only">{ props.html }</label>
      <input id={ props.name } name={ props.name } type={ props.type } autoComplete={ props.name } required className="relative block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm" placeholder={ props.html } />
    </div>
  );
}