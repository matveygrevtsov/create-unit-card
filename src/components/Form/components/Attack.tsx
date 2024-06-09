import {
  ActionIcon,
  Flex,
  Input,
  NumberInput,
  NumberInputProps,
} from "@mantine/core";
import { FC, useEffect, useMemo, useState } from "react";
import { IconPlus, IconTrash } from "@tabler/icons-react";
import { TAttack, useFormContext } from "../../Main/Main";
import { DataTable, DataTableColumn } from "mantine-datatable";

type TColumn = DataTableColumn<TAttack>;

interface IProps {
  formKey: "fighting" | "shooting";
  title: string;
}

export const Attack: FC<IProps> = ({ formKey, title }) => {
  const { setFieldValue } = useFormContext();

  const [records, setRecords] = useState<TAttack[]>([]);

  const columns = useMemo<TColumn[]>(() => {
    function changeRecord<Key extends keyof TAttack>(
      recordIndex: number,
      key: Key,
      newValue: TAttack[Key]
    ) {
      setRecords((prevRecords) =>
        prevRecords.reduce<TAttack[]>((accumulator, record, index) => {
          const newRecord =
            index === recordIndex
              ? {
                  ...record,
                  [key]: newValue,
                }
              : record;
          return [...accumulator, newRecord];
        }, [])
      );
    }

    const columns: TColumn[] = [
      {
        accessor: "name",
        title: "Наименование",
        width: "30%",
        render: (record, index) => {
          const handleChange: React.ChangeEventHandler<HTMLInputElement> = (
            event
          ) => {
            changeRecord(index, "name", event.target.value);
          };

          return <Input value={record.name} onChange={handleChange} />;
        },
      },
      {
        accessor: "damage",
        title: "Урон",
        width: "30%",
        render: (record, index) => {
          const handleChange: NumberInputProps["onChange"] = (value) => {
            changeRecord(index, "damage", parseInt(`${value}`, 10));
          };

          return <NumberInput value={record.damage} onChange={handleChange} />;
        },
      },
      {
        accessor: "minDiceValue",
        title: "Минимальное значение кубика",
        width: "30%",
        render: (record, index) => {
          const handleChange: NumberInputProps["onChange"] = (value) => {
            changeRecord(index, "minDiceValue", parseInt(`${value}`, 10));
          };

          return (
            <NumberInput value={record.minDiceValue} onChange={handleChange} />
          );
        },
      },
      {
        accessor: "delete",
        title: "",
        width: "10%",
        render: (_, index) => {
          const handleClick = () => {
            setRecords((prevRecords) =>
              prevRecords.filter((_, recordIndex) => recordIndex !== index)
            );
          };

          return (
            <ActionIcon onClick={handleClick} variant="filled" color="red">
              <IconTrash />
            </ActionIcon>
          );
        },
      },
    ];

    return columns;
  }, [formKey]);

  const addEmptyRow = () => {
    const record: TAttack = {
      name: "-",
      damage: 1,
      minDiceValue: 1,
    };

    setRecords((prevRecords) => [...prevRecords, record]);
  };

  useEffect(() => setFieldValue(formKey, records), [records, setFieldValue]);

  return (
    <Input.Wrapper label={title}>
      <Flex direction="column" rowGap={16}>
        <DataTable columns={columns} records={records} withTableBorder />

        <ActionIcon onClick={addEmptyRow}>
          <IconPlus />
        </ActionIcon>
      </Flex>
    </Input.Wrapper>
  );
};
