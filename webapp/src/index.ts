import { testIds } from './testIds';

const appDiv = document.querySelector(`[data-testid="${testIds.appContainer}"]`);
const heading = document.querySelector(`[data-testid="${testIds.mainHeading}"]`);
const paragraph = document.querySelector(`[data-testid="${testIds.sampleParagraph}"]`);
const button = document.querySelector(`[data-testid="${testIds.clickButton}"]`);
const input = document.querySelector(`[data-testid="${testIds.textInput}"]`) as HTMLInputElement | null;
const display = document.querySelector(`[data-testid="${testIds.displayArea}"]`);
const checkbox = document.querySelector(`[data-testid="${testIds.showMessageCheckbox}"]`) as HTMLInputElement | null;
const message = document.querySelector(`[data-testid="${testIds.conditionalMessage}"]`) as HTMLElement | null;
const select = document.querySelector(`[data-testid="${testIds.optionSelect}"]`) as HTMLSelectElement | null;
const selectedDisplay = document.querySelector(`[data-testid="${testIds.selectedOptionDisplay}"]`);
const firstNameLabel = document.querySelector(`[data-testid="${testIds.firstNameLabel}"]`);
const questionLabel = document.querySelector(`[data-testid="${testIds.firstNameLabel}"]`);

if (appDiv) {
    appDiv.innerHTML = ''; // Clear existing content

    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = '15px'; // Adjust gap for spacing

    if (heading) {
        container.appendChild(heading);
    }
    if (paragraph) {
        container.appendChild(paragraph);
    }
    if (button) {
        container.appendChild(button);
        button.addEventListener('click', () => {
            if (paragraph) {
                paragraph.textContent = 'Button clicked!';
            }
        });
    }

    // Create and append the input-container
    const inputContainer = document.createElement('div');
    inputContainer.classList.add('input-container'); // Add the class for styling

    if (firstNameLabel) {
        inputContainer.appendChild(firstNameLabel);
    }
    if (input) {
        inputContainer.appendChild(input);
    }

    container.appendChild(inputContainer); // Append inputContainer to main container

    if (display) {
        container.appendChild(display);
        if (input) {
            input.addEventListener('input', () => {
                display.textContent = `You typed: ${input.value}`;
            });
        }
    }

    if (checkbox && message) {
        message.style.display = 'none';
    
        const checkboxContainer = document.createElement('div');
        checkboxContainer.classList.add('checkbox-container');
        checkboxContainer.style.display = 'flex';
        checkboxContainer.style.alignItems = 'center';
    
        // Recreate the questionLabel element
        const questionLabel = document.createElement('label');
        questionLabel.setAttribute('data-testid', testIds.questionLabel); // Use the data-testid from testIds
        questionLabel.textContent = 'Do you like cheese?'; // Set the label text
    
        checkboxContainer.appendChild(questionLabel); // Append the recreated label
        checkboxContainer.appendChild(checkbox);
        container.appendChild(checkboxContainer);
        container.appendChild(message);
    
        checkbox.addEventListener('change', () => {
            if (message && checkbox) {
                message.style.display = checkbox.checked ? 'block' : 'none';
            }
        });
    }
    
    if (select && selectedDisplay) {
        container.appendChild(select);
        container.appendChild(selectedDisplay);
        select.addEventListener('change', () => {
            if (select) {
                selectedDisplay.textContent = `Selected: ${select.value}`;
            }
        });
    }

    appDiv.appendChild(container); // Corrected line: Add the container to appDiv
}