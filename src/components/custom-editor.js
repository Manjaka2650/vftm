import React, { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import axios from 'axios';

export default function CustomEditor({ content, setContent }) {
  const editorRef = useRef(null);

  const handleImageUpload = (blobInfo) => {
    return new Promise((resolve, reject) => {
      const formData = new FormData();
      formData.append('file', blobInfo.blob(), blobInfo.filename());

      axios.post('http://localhost:5000/image-reunion-upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
      })
      .then(response => {
        if (response.data.location) {
          resolve('http://localhost:5000' + response.data.location);
          console.log('url retourner' + response.data.location)
        } else {
          reject('Erreur upload: Pas de location retournée');
        }
      })
      .catch(error => {
        let errorMessage = 'Erreur lors de l\'upload';
        if (error.response) {
          errorMessage = `Erreur ${error.response.status}: ${error.response.data.error || 'Erreur inconnue'}`;
        } else if (error.request) {
          errorMessage = 'Aucune réponse du serveur';
        } else {
          errorMessage = error.message;
        }
        reject(errorMessage);
      });
    });
  };


  const handleEditorChange = (newContent) => {
    setContent(newContent); 
  };

  return (
    <Editor
      apiKey='zcccyaycvvmodxmhbu7hkx63z1pbldo3hu2l4fjjito9gfrg'
      onInit={(evt, editor) => editorRef.current = editor}
      onEditorChange={handleEditorChange} 
      value={content}
      init={{
        plugins: [
          'anchor', 'autolink', 'charmap', 'codesample', 'emoticons', 
          'image', 'link', 'lists', 'media', 'searchreplace', 'table',
          'visualblocks', 'wordcount', 'checklist', 'mediaembed',
          'casechange', 'export', 'formatpainter', 'pageembed',
          'a11ychecker', 'tinymcespellchecker', 'permanentpen',
          'powerpaste', 'advtable', 'advcode', 'editimage',
          'advtemplate', 'ai', 'mentions', 'tinycomments',
          'tableofcontents', 'footnotes', 'mergetags', 'autocorrect',
          'typography', 'inlinecss', 'markdown', 'importword',
          'exportword', 'exportpdf'
        ],
        toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
        
        // Configuration pour l'upload d'images
        images_upload_handler: handleImageUpload,
        automatic_uploads: true,
        file_picker_types: 'image',
        
        // Permettre le glisser-déposer d'images
        paste_data_images: true,
        
        // Configuration des types de fichiers autorisés
        images_file_types: 'jpg,jpeg,png,gif,webp',
        
        // Taille maximale de fichier (en bytes) - ici 5MB
        images_upload_max_filesize: '5mb',

        tinycomments_mode: 'embedded',
        tinycomments_author: 'Author name',
        mergetags_list: [
          { value: 'First.Name', title: 'First Name' },
          { value: 'Email', title: 'Email' },
        ],
        ai_request: (request, respondWith) => respondWith.string(() => Promise.reject('See docs to implement AI Assistant')),
      }}
      
    />
  );
}