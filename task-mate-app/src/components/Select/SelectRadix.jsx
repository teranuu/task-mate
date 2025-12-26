import * as Select from '@radix-ui/react-select';
import styles from './select.module.css';
function SelectRadix(){

    return(
        <>
        <Select.Root>
            <Select.Trigger className={styles.SelectTrigger}>
            <Select.Value className={styles.SelectValue} placeholder="Status"/>
            <Select.Icon className={styles.SelectIcon}>▼</Select.Icon>
            </Select.Trigger>

            <Select.Content className={styles.SelectContent}>
            <Select.Viewport className={styles.SelectViewport}>
                <Select.Group>

                    <Select.Item value="todo" className={styles.SelectItem}>
                        <Select.ItemText>To-Do</Select.ItemText>
                    </Select.Item>

                    <Select.Item value="in-progress" className={styles.SelectItem}>
                        <Select.ItemText>In-Progress</Select.ItemText>
                    </Select.Item>

                    <Select.Item value="done" className={styles.SelectItem}>
                        <Select.ItemText>Done</Select.ItemText>
                    </Select.Item>
                </Select.Group>

                <Select.Separator className={styles.SelectSeparator} />
            </Select.Viewport>
            </Select.Content>
        </Select.Root>
            

        
        </>
    );

}

export default SelectRadix;