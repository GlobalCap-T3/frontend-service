import SubmitButton from "../components/form/SubmitButton"
import Field from "../components/form/Field"

export default function Signup() {
  return (
    <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md">
        <form>
          <div className="flex items-center justify-between">
            <Field name="first_name" type="text" html="First name" />
            <Field name="last_name" type="text" html="Last name" />
          </div>
          <Field name="email" type="text" html="Email address" />
          <Field name="password" type="password" html="Password" />
          <SubmitButton html="Sign up" />
        </form>
      </div>
    </div>
  );
}