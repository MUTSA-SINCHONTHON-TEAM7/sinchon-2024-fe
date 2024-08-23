import styled from 'styled-components';
import plus from '../assets/plus.svg'

const UploadButton = styled.label`
    display: flex;
    justify-content: center;
    align-items: center;
    display: flex;
    width: 140px;
    height: 140px;
    padding: 20px;
    justify-content: center;
    align-items: center;
    border-radius: 11px;
    background: #F5F5F5;
    gap: 10px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
`;
const ImageInput = styled.input`
    display: none;
`;
const PlusIcon = styled.img`
    width: 28px;
    height: 28px;
    display: ${({ $show }) => ($show ? 'block' : 'none')};
`;
const ImagePreview = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
`;

export const ProfileImageUpload = ({image, setImage}) => {

    const handleImageUpload = async(event) => {
        const file = event.target.files[0];
        if (!file) {
            return;
        }

        const formData = new FormData();
        formData.append('url', file);

        /*try {
            const accessToken = localStorage.getItem('access_token');
            const response = await axiosInstance.post('/pets/img', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${accessToken}`,
                }
            })
            setImage(`http://ec2-43-201-159-179.ap-northeast-2.compute.amazonaws.com${response.data.data.url}`);
            
        } catch (error) {
            console.error(error);
        }*/
    };

    return (
        <UploadButton>
            <PlusIcon src={plus} $show={!image} /> {/*이미지가 등록되었으면 + 아이콘 안보이게*/}
            {image && <ImagePreview src={image} alt="Uploaded Image" />} {/*이미지가 등록되었으면 미리보기로 보여줌*/}
            <ImageInput type="file" accept="image/*" onChange={handleImageUpload} />
        </UploadButton>
    );
};