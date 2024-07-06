import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import useNotistack from '@hooks/useNotistack';
import PropTypes from 'prop-types';
import { StyledDropzone, ImageContainer } from './style';

// client
import supabase from '@client/client';


const imgTypes = {
    'image/jpeg': [],
    'image/png': [],
    'image/gif': [],
    'image/bmp': [],
    'image/webp': [],
    'image/svg+xml': []
}

const docTypes = {
    'application/pdf': [],
    'application/msword': [],
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document': [],
    'application/vnd.ms-excel': [],
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': []
}

const DropFiles = ({ type, multiple, children, avatarUrl, userId }) => {

    const [imageUrl, setImageUrl] = useState(avatarUrl);
    const { notify } = useNotistack('File has been successfully uploaded.', 'success');

    const updatePublicUrl = async (filePath) => {
        const { data, error } = supabase.storage.from('avatars').getPublicUrl(filePath);
        if (error) {
            console.error('Error getting public URL:', error);
            return;
        }

        console.log('data', data);
        console.log('data.publicUrl', data.publicUrl);

        // set the public URL
        setImageUrl(data.publicUrl);
    }

    const handleDrop = async (acceptedFiles) => {
        const file = acceptedFiles[0];
        if (file) {

            // upload the file to the server
            const fileExt = file.name.split('.').pop();
            const fileName = `${Math.random()}.${fileExt}`;
            const filePath = `${userId}/${fileName}`;

            console.log('filepath', filePath);

            // Upload to Supabase storage with user ID in metadata
            const { data, error } = await supabase.storage
                .from('avatars') // 'avatars' should be your bucket name
                .upload(filePath, file, {
                    upsert: true,
                    cacheControl: '3600'
                });

            if (error) {
                console.error('Error uploading file:', error);
                return;
            }

            // update the public URL
            updatePublicUrl(filePath);
            notify();
        }
    };

    const {
        getRootProps,
        getInputProps,
        isDragActive
    } = useDropzone({
        accept: type === 'image' ? { ...imgTypes } : { ...docTypes },
        multiple: multiple,
        onDrop: handleDrop
    });

    return (
        <div>
            <StyledDropzone {...getRootProps()} className={isDragActive ? 'dropzone active' : 'dropzone'}>
                <input {...getInputProps()} />
                {imageUrl ? (
                    <ImageContainer>
                        <img src={imageUrl} alt="Preview" />
                    </ImageContainer>
                ) : (
                    children
                )}
            </StyledDropzone>
        </div>
    )
}

DropFiles.propTypes = {
    type: PropTypes.oneOf(['image', 'doc']).isRequired,
    multiple: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired
}

export default DropFiles;
