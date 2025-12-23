import * as CheckboxPrimitive from "@radix-ui/react-checkbox"; // ✅ correct import
import { Check } from "lucide-react";
import styles from "./checkbox.module.css";

function CheckboxRadix({ checked, onCheckedChange }) {
  return (
    <CheckboxPrimitive.Root
      className={styles.Root}
      checked={checked}
      onCheckedChange={onCheckedChange}

    >
      <CheckboxPrimitive.Indicator className={styles.Indicator}>
        <Check size={13} />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}

export default CheckboxRadix;