from pdf2image import convert_from_path
import os
import shutil

def convert_pdf_to_png(pdf_path, output_folder):
    # Create output folder if it doesn't exist
    os.makedirs(output_folder, exist_ok=True)

    # Convert PDF to images
    images = convert_from_path(pdf_path)

    # Save images as PNG
    for i, image in enumerate(images):
        image.save(os.path.join(output_folder, f"page_{i + 1}.png"), "PNG")

def main():
    input_folder = "input_pdfs"  # Specify the folder containing PDF files
    output_folder = "output_images"  # Specify the folder to save PNG images
    pdf_folder = "pdf_files"  # Specify the folder to move PDF files

    # Create folders if they don't exist
    os.makedirs(input_folder, exist_ok=True)
    os.makedirs(output_folder, exist_ok=True)
    os.makedirs(pdf_folder, exist_ok=True)

    # Iterate through PDF files in the input folder
    for file_name in os.listdir(input_folder):
        if file_name.endswith(".pdf"):
            pdf_path = os.path.join(input_folder, file_name)

            # Convert PDF to PNG
            convert_pdf_to_png(pdf_path, output_folder)

            # Move original PDF file to a different folder
            shutil.move(pdf_path, os.path.join(pdf_folder, file_name))

    print("Conversion and file movement completed.")

if __name__ == "__main__":
    main()
