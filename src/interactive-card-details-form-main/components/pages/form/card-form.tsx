import { object, string } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import background from "../../../images/bg-main-desktop.png";
import styles from "../../styles/constants";
const validationSchema = object().shape({
  username: string()
    .required("Username is required")
    .min(3, "Username must be at least 3 characters"),
  email: string().required("Email is required").email("Invalid email address"),
  password: string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters"),
});

const CardForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });
  // Form submission handler
  const onSubmit = (data: any) => {
    // Do something with the form data
  };
  return (
    <div className="flex flex-row justify-center ">
      <img
        src={background}
        alt="background"
        className="w-4/12 h-screen max-h-screen "
      />
      <div className="w-8/12 h-screen max-h-screen flex items-center justify-center  ">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="h-screen max-h-screen flex flex-col items-center justify-center "
        >
          <div className={`${styles.divs}`}>
            <label htmlFor="Cardholder" className="uppercase  ">
              <p>Cardholder Name</p>
            </label>
            <input
              type="text"
              id="Cardholder"
              placeholder="e.g. Jane Appleseed"
              className={`${styles.input} ${styles.formWidth}`}
              {...register("cardHolder")}
            />
          </div>
          <div className={`${styles.divs}`}>
            <label htmlFor="Card">
              <p>Card Number</p>
            </label>
            <input
              type="text"
              id="Card"
              placeholder="e.g. 1234 5678 9123 0000"
              className={`${styles.input} ${styles.formWidth}`}
              {...register("cardNumber")}
            />
          </div>
          <div className={`${styles.divs} `}>
            <label htmlFor="Date">
              <p>Exp. Date (MM/YY)</p>
            </label>
            <input
              type="date"
              id="Date "
              placeholder="e.g. 1234 5678 9123 0000"
              className={`${styles.input} ${styles.formWidth}`}
            />
          </div>
          <button
            type="submit"
            className={`${styles.formWidth} bg-[#220930] text-white h-12 rounded-md mt-8 `}
          >
            Confirm
          </button>
        </form>
      </div>
    </div>
  );
};

export default CardForm;
