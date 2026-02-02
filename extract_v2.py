import pypdf
import sys

pdf_path = r"assets/docs/Anmol Soni Resume.pdf"

def analyze_pdf_links(pdf_path):
    try:
        reader = pypdf.PdfReader(pdf_path)
    except Exception as e:
        print(f"Error reading PDF: {e}")
        return

    print(f"Total Pages: {len(reader.pages)}")
    
    all_links = []

    for i, page in enumerate(reader.pages):
        print(f"\n--- Page {i+1} ---")
        
        # 1. Extract Text to see content
        text = page.extract_text()
        print("--- FULL TEXT CONTENT ---")
        print(text)
        print("--- END TEXT CONTENT ---")

        # 2. Extract Links/Annotations
        if "/Annots" in page:
            annots = page["/Annots"]
            # annots can be an IndirectObject, so we need to resolve it
            if isinstance(annots, pypdf.generic.IndirectObject):
                annots = annots.get_object()
            
            print(f"Found {len(annots)} annotations.")
            
            for annot in annots:
                obj = annot.get_object()
                subtype = obj.get("/Subtype")
                
                if subtype == "/Link":
                    uri = obj.get("/A", {}).get("/URI")
                    rect = obj.get("/Rect") # [x_ll, y_ll, x_ur, y_ur]
                    
                    if uri:
                        all_links.append({"page": i+1, "uri": uri, "rect": rect})
                        print(f"LINK FOUND: {uri}") 
                        # We can't easily extract text *under* the rect with just pypdf reliably without complex math
                        # But knowing the links exist is step 1.
    
    return all_links

if __name__ == "__main__":
    links = analyze_pdf_links(pdf_path)
    print("\n\n--- SUMMARY OF LINKS ---")
    for l in links:
        print(f"Page {l['page']}: {l['uri']}")
