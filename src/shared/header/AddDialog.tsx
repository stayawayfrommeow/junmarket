import {
  Avatar,
  Box,
  Button,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { iJunFields, iPic, iSkill } from '../interfaces';
import PocketBase from 'pocketbase';
import { useGetSkillsQuery } from '../../services/skills';
import style from './header.module.scss';
import SkillsSelect from '../components/SkillsSelect';
import { useDropzone } from 'react-dropzone';

interface iProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function AddDialog({ open, setOpen }: iProps) {
  const pb = new PocketBase('http://127.0.0.1:8090/');
  const { data, isSuccess } = useGetSkillsQuery();
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();
  const [path, setPath] = useState<iPic | null>(null);

  const { getValues, control, setValue } = useForm<iJunFields>({
    defaultValues: {
      picture: '',
      name: '',
      skills: [],
    },
  });

  const handleClose = () => {
    setOpen(false);
  };

  const handleAdd = () => {
    console.log(getValues());
  };

  useEffect(() => {
    const formData = new FormData();

    formData.append('picture', acceptedFiles[0]);

    const createdRecord = pb
      .collection('pictures')
      .create<iPic>(formData)
      .then((res) => {
        setPath(res);
      });
  }, [acceptedFiles]);

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{ sx: { width: '600px' } }}
    >
      <DialogTitle>Add new jun.</DialogTitle>
      <DialogContent dividers>
        <form className={style.form}>
          <div className={style.avatar}>
            {!path ? (
              <div {...getRootProps()} className={style.dropzone}>
                <input {...getInputProps()} />
                <p>Drag 'n' drop some files here, or click to select files</p>
              </div>
            ) : (
              <Avatar
                src={`http://127.0.0.1:8090/api/files/${path?.collectionId}/${path?.id}/${path?.picture}
                `}
                sx={{ width: '7rem', height: '7rem' }}
              />
            )}
          </div>
          <Controller
            control={control}
            name='name'
            render={({ field }) => (
              <TextField label='Name' variant='outlined' {...field} />
            )}
          />
          {isSuccess && (
            <Controller
              control={control}
              name='skills'
              render={({ field }) => (
                <SkillsSelect field={field} setter={setValue} skills={data} />
              )}
            />
          )}
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleAdd}>Add</Button>
      </DialogActions>
    </Dialog>
  );
}

export default AddDialog;
