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

if (appDiv) {
    appDiv.innerHTML = ''; // Clear existing content

    if (heading) {
        appDiv.appendChild(heading);
    }
    if (paragraph) {
        appDiv.appendChild(paragraph);
    }
    if (button) {
        appDiv.appendChild(button);
        button.addEventListener('click', () => {
            if (paragraph) {
                paragraph.textContent = 'Button clicked!';
            }
        });
    }
    if (input && display) {
        appDiv.appendChild(input);
        appDiv.appendChild(display);
        input.addEventListener('input', () => {
            if (input) {
                display.textContent = `You typed: ${input.value}`;
            }
        });
    }
    if (checkbox && message) {
        appDiv.appendChild(checkbox);
        appDiv.appendChild(message);
        checkbox.addEventListener('change', () => {
            if (message && checkbox) {
                message.style.display = checkbox.checked ? 'block' : 'none';
            }
        });
    }
    if (select && selectedDisplay) {
        appDiv.appendChild(select);
        appDiv.appendChild(selectedDisplay);
        select.addEventListener('change', () => {
            if (select) {
                selectedDisplay.textContent = `Selected: ${select.value}`;
            }
        });
    }
}