import clsx from "clsx";
import BaseField from "./Input/BaseField";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    error?: string;
    watchValue?: string;
}

export default function Input({ label, error, watchValue, ...props }: Readonly<InputProps>) {
    return (
        <BaseField label={label} error={error} watchValue={watchValue} name={props.name}>
            {({ inputProps }) => (
                <input
                    {...props}
                    {...inputProps}
                    className={clsx(
                        "border-b border-black/50 w-full focus:outline-0 focus:border-black/100 active:outline-0 transition-all duration-300 ease-in-out",
                        error && "border-red-600"
                    )}
                />
            )}
        </BaseField>
    );
}
