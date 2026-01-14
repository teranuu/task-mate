import * as Select from '@radix-ui/react-select';
import styles from './select.module.css';
function SelectRadixFilter( {placeHolder, value, onValueChange, ...props} ){

    return(
        <>
        <Select.Root value={value} onValueChange={onValueChange}>
            <Select.Trigger className={styles.SelectTrigger} {...props}>
            <Select.Value className={styles.SelectValue} placeholder={placeHolder}/>
            <Select.Icon className={styles.SelectIcon}>▼</Select.Icon>
            </Select.Trigger>

            <Select.Content className={styles.SelectContent}>
            <Select.Viewport className={styles.SelectViewport}>
                <Select.Group>

                    <Select.Item value="pending" className={styles.SelectItem}>
                        <Select.ItemText>Pending</Select.ItemText>
                    </Select.Item>

                    <Select.Item value="in_progress" className={styles.SelectItem}>
                        <Select.ItemText>In-Progress</Select.ItemText>
                    </Select.Item>

                    <Select.Item value="all" className={styles.SelectItem}>
                        <Select.ItemText>All</Select.ItemText>
                    </Select.Item>
                </Select.Group>

                <Select.Separator className={styles.SelectSeparator} />
            </Select.Viewport>
            </Select.Content>
        </Select.Root>
            

        
        </>
    );

}

export default SelectRadixFilter;